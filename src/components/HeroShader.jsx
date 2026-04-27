import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;

// Gold: #C8A96E → (0.784, 0.663, 0.431)
// Blue: #1A3CFF → (0.102, 0.235, 1.0)

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2  shift = vec2(100.0);
  mat2  rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.y = 1.0 - uv.y;

  float t = u_time * 0.15;

  vec2 q = vec2(
    fbm(uv + vec2(0.0, 0.0)),
    fbm(uv + vec2(5.2, 1.3))
  );

  vec2 r = vec2(
    fbm(uv + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
    fbm(uv + 4.0 * q + vec2(8.3, 2.8) + 0.126 * t)
  );

  float f = fbm(uv + 4.0 * r);

  // Gold base
  vec3 gold = vec3(0.784, 0.663, 0.431);
  // Blue accent
  vec3 blue = vec3(0.102, 0.235, 1.0);
  // Deep bg
  vec3 dark = vec3(0.02, 0.02, 0.025);

  vec3 col = mix(dark, gold, clamp(f * f * 2.0, 0.0, 1.0));
  col = mix(col, blue, clamp(length(q) * 0.6, 0.0, 1.0));
  col = mix(col, gold * 1.5, clamp(f * 1.2, 0.0, 1.0));

  // Vignette
  vec2 vuv = uv * 2.0 - 1.0;
  float vignette = 1.0 - dot(vuv * 0.6, vuv * 0.6);
  col *= pow(max(vignette, 0.0), 0.5);

  // Keep very dark, just a hint of color
  col *= 0.18;

  gl_FragColor = vec4(col, 1.0);
}
`

function createShader(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(s))
    return null
  }
  return s
}

export default function HeroShader() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const vert = createShader(gl, gl.VERTEX_SHADER, VERT)
    const frag = createShader(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vert || !frag) return

    const prog = gl.createProgram()
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes  = gl.getUniformLocation(prog, 'u_resolution')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    let start = null
    const render = (ts) => {
      if (!start) start = ts
      gl.uniform1f(uTime, (ts - start) / 1000)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animRef.current = requestAnimationFrame(render)
    }
    animRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      gl.deleteProgram(prog)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
