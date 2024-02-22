import Heading from "./heading";
import Section from "./section";
export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
  
    <section>
      <Heading level={2}>Heading</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={2}>Heading</Heading>
      </section>
    <Section>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
  <Section>
      <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
    </Section>
    </Section>
    </Section>
  );
}