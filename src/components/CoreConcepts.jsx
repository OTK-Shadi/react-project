import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export function CoreConcepts () {
    return (
        <Section id="core-concepts"> 
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} />
            ))}
          </ul>
        </Section>
    );
}
