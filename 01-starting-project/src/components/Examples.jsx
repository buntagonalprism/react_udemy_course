import { useState } from 'react';

import TabButton from './TabButton';
import Section from './Section';
import { EXAMPLES } from '../data/data';
import Tabs from './Tabs';

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState('');

  let selectedTopicContent = <div>No topic selected</div>;
  if (selectedTopic) {
    selectedTopicContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(topic) {
    console.log('TabButton clicked');
    setSelectedTopic(topic)
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs>
        {selectedTopicContent}
      </Tabs>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
      </menu>

    </Section>
  );
}