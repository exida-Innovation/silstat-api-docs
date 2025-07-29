import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Digital Transformation of Process Safety Data',
    Image: require('@site/static/img/silstat-digital-transformation.jpg').default,
    description: (
      <>       
        <p className="margin-bottom--xs">Much of the required SILstat configuration can be built automatically through a simple transfer of existing exSILentia project data, reducing setup time and costs and improving traceability.</p>

        <p className="margin-bottom--xs">If an interface is needed to an alternative data management system, SILstat allows for an efficient data transfer from any third-party system. A data philosophy document is used to facilitate a connection from external data sources to SILstat.</p>

        <p className="margin-bottom--xs">Once a site hierarchy is configured, it becomes a straightforward process to navigate through Safeguards, Devices, Hazards, and Procedures. Each change to the database is auditable and traceable.</p>
      </>
    ),
  },
  {
    title: 'Intuitive Data Structure Communicates Complex Information',
    Image: require('@site/static/img/silstat-data-structure.jpg').default,
    description: (
      <>
        <p className="margin-bottom--xs">Hierarchical and device data is set up automatically, creating functional relationships between devices that are displayed within SILstat's Plant Hierarchy and Library.</p>

        <p className="margin-bottom--xs">Within the hierarchies, SILstat helps to track critical events for each Safety Instrumented System (SIS) device during its lifecycle, including Install, Bypass, Repair, Replacement, and Decommissioning.</p>

        <p className="margin-bottom--xs">These events will be automatically added to a Device Timeline for easy lifecycle visualization.</p> 
      </>
    ),
  },
  {
    title: 'Data Collection',
    Image: require('@site/static/img/silstat-data-collection.jpg').default,
    description: (
      <>
        <p className="margin-bottom--sm">SILstat supports the capture, documentation, and classification of the following life events:</p>
        <ul>
          <li>Hazardous Events</li>
          <li>Device Failures</li>
          <li>Proof Tests</li>
          <li>Scheduled and Ad Hoc Maintenance Activities</li>
          <li>Bypasses</li>
          <li>Demands</li>
        </ul>
      </>
    ),
  },
    {
    title: 'Dashboard',
    Image: require('@site/static/img/silstat-dashboard.jpg').default,
    description: (
      <>
        <p className="margin-bottom--sm">
          The preconfigured SILstat Dashboard provides at-a-glance information on the performance of a safety system. Pre-set widgets within the program allow for easy analysis. SILstat additionally provides a suite of pre-defined reports, allowing for the sharing of data.
        </p>
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className="container margin-bottom--lg">
      <div className="padding-horiz--md margin-bottom--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center margin-bottom--md">
        <img src={Image} alt={title} className={styles.featureImage} />
      </div>
      <hr />
  </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="d-flex flex-column gap--lg">
          <div className="margin-bottom--md">
            <p>
              <a href="https://www.exida.com/SILstat" target="_blank" rel="noopener noreferrer">SILstat™</a> provides insight to the performance of your safety systems onsite, simplifying the collection of critical safety data, and contextualizing results for comparison of key metrics to assumptions made in your SIS design. SILstat's API allows you to integrate your existing systems with SILstat to set up your database or collect event data.
            </p>
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}