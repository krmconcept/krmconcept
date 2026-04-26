import SEOHead from '../components/SEOHead'

function LegalLayout({ title, seoTitle, children }) {
  return (
    <>
      <SEOHead title={`${seoTitle} — KRM Concept`} description={`${seoTitle} de KRM Concept, studio web indépendant à Bruxelles.`} />
      <div className="pt-[70px]">
        <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-primary)' }}>
              {seoTitle}
            </p>
            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
              {title}
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div
            className="max-w-4xl mx-auto px-6 lg:px-12 text-sm leading-relaxed flex flex-col gap-8"
            style={{ color: 'var(--text-muted)' }}
          >
            {children}
          </div>
        </section>
      </div>
    </>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" seoTitle="Mentions légales">
      <Section title="Éditeur du site">
        <p>KRM Concept — Studio web indépendant</p>
        <p>Fondateur : Karim (contact@krmconcept.com)</p>
        <p>Localisation : Bruxelles, Belgique</p>
        <p>Téléphone : +32 483 44 06 69</p>
        <p>Email : contact@krmconcept.com</p>
        <p>Site web : https://krmconcept.com</p>
        <p>Numéro d'entreprise : en cours d'enregistrement</p>
      </Section>
      <Section title="Hébergement">
        <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
      </Section>
      <Section title="Propriété intellectuelle">
        <p>L'ensemble du contenu de ce site (textes, images, design, code source) est la propriété exclusive de KRM Concept, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
      </Section>
      <Section title="Responsabilité">
        <p>KRM Concept ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'inaccessibilité temporaire du service.</p>
      </Section>
    </LegalLayout>
  )
}

export function CGVPage() {
  return (
    <LegalLayout title="Conditions générales de vente" seoTitle="CGV">
      <Section title="Objet">
        <p>Les présentes CGV régissent les relations contractuelles entre KRM Concept et ses clients dans le cadre de la création de sites web et services associés.</p>
      </Section>
      <Section title="Devis et commande">
        <p>Tout projet fait l'objet d'un devis détaillé transmis sous 48h. Le devis est valable 30 jours. La commande est effective à réception du bon de commande signé et du versement d'un acompte de 50%.</p>
      </Section>
      <Section title="Prix et paiement">
        <p>Les prix sont indiqués en euros TTC. Acompte de 50% à la commande, solde à la livraison. Les abonnements sont prélevés mensuellement par virement ou carte bancaire.</p>
      </Section>
      <Section title="Délais de livraison">
        <p>Les délais indiqués dans le devis sont donnés à titre indicatif mais s'engagent contractuellement. En cas de retard imputable à KRM Concept, une remise peut être accordée.</p>
      </Section>
      <Section title="Modifications et révisions">
        <p>Des révisions illimitées sont incluses jusqu'à validation de la maquette. Toute modification substantielle du cahier des charges après validation peut faire l'objet d'un avenant tarifaire.</p>
      </Section>
      <Section title="Propriété intellectuelle">
        <p>À réception du paiement complet, le client dispose d'une licence d'utilisation exclusive sur le site livré. KRM Concept conserve le droit de présenter le projet en référence.</p>
      </Section>
      <Section title="Droit de rétractation">
        <p>Conformément à la législation belge, un droit de rétractation de 14 jours s'applique pour les consommateurs, sauf si les travaux ont déjà commencé avec leur accord exprès.</p>
      </Section>
    </LegalLayout>
  )
}

export function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" seoTitle="Confidentialité">
      <Section title="Responsable du traitement">
        <p>KRM Concept, représenté par Karim, est responsable du traitement des données personnelles collectées via ce site.</p>
      </Section>
      <Section title="Données collectées">
        <p>Via le formulaire de contact : prénom, nom, email, téléphone (optionnel), type de projet, message. Ces données sont uniquement utilisées pour répondre à votre demande.</p>
      </Section>
      <Section title="Durée de conservation">
        <p>Les données sont conservées pendant 3 ans à compter de la dernière interaction, conformément aux obligations légales belges.</p>
      </Section>
      <Section title="Vos droits">
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits : contact@krmconcept.com</p>
      </Section>
      <Section title="Cookies">
        <p>Ce site utilise des cookies techniques nécessaires au fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement.</p>
      </Section>
    </LegalLayout>
  )
}

export function CookiesPage() {
  return (
    <LegalLayout title="Politique des cookies" seoTitle="Cookies">
      <Section title="Qu'est-ce qu'un cookie ?">
        <p>Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation.</p>
      </Section>
      <Section title="Cookies utilisés sur ce site">
        <p><strong style={{ color: 'var(--text-primary)' }}>Cookies techniques</strong> — Nécessaires au bon fonctionnement du site (préférences de navigation). Ces cookies ne peuvent pas être désactivés.</p>
        <p><strong style={{ color: 'var(--text-primary)' }}>Cookies analytiques</strong> — Avec votre consentement, nous pouvons utiliser des outils d'analyse pour améliorer l'expérience utilisateur. Ces outils sont configurés pour anonymiser votre adresse IP.</p>
      </Section>
      <Section title="Gestion de vos préférences">
        <p>Vous pouvez à tout moment modifier vos préférences de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter le fonctionnement du site.</p>
      </Section>
      <Section title="Contact">
        <p>Pour toute question relative aux cookies : contact@krmconcept.com</p>
      </Section>
    </LegalLayout>
  )
}
