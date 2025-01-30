import { CORE_CONCEPTS as coreConcepts } from '../data/data';
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
  return (<section id="core-concepts">
    <ul>
      {coreConcepts.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
    </ul>
  </section>);
}