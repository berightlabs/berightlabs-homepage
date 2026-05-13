import { workItems, workSection } from '../data/work';
import { EditorialList } from './EditorialList';
import { Section } from './Section';

export function Work() {
  return (
    <Section
      id="work"
      label="Work"
      number={workSection.number}
      title={workSection.title}
    >
      <EditorialList items={workItems} />
    </Section>
  );
}
