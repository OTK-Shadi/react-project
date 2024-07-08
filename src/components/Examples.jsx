import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from "./TabButton.jsx";
import Section from './Section.jsx';
import Taps from './Taps.jsx';

export function Examples () {
    const [selectedTopic, setTabContect] = useState();
  
    function handleSelect(selectedButton) {
        setTabContect(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if(selectedTopic) {
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>
    );
  }
    return (
        <Section title="Example" id="examples">
            <Taps   
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic == "components"} onSelect={() => handleSelect('components')}>Component</TabButton>
                        <TabButton isSelected={selectedTopic == "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic == "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic == "state"} onSelect={() => handleSelect('state')}>State</TabButton>
                    </>
            }
            >
                {tabContent}
            </Taps>
        </Section>
    );
}