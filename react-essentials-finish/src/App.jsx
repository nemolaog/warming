import {useState} from "react";
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import NemoFirstHeader from "./components/Header/NemoFirstHeader";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
    const [selectTopic, setSelectTopic] = useState("");

    let tabContent = 'Please click a button'

    function handleSelect(selectButton) {
        //selectButton => String
        setSelectTopic(selectButton);
        tabContent = selectButton;
    }

    return (
        <div>
            <NemoFirstHeader></NemoFirstHeader>
            <main>
                <section id="core-concepts">
                    <h2>
                        Core Concept
                    </h2>
                    <ul>
                        {CORE_CONCEPTS.map((item) =>(
                            <CoreConcept key={item.title} {...item}/>
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>
                        Examples
                    </h2>
                    <menu>
                        <TabButton isSelected={selectTopic === "components"}
                                   onSelect={() => handleSelect('components')}>
                            Component </TabButton>
                        <TabButton isSelected={selectTopic === "jsx"}
                                   onSelect={() => handleSelect('jsx')}>
                            JSX </TabButton>
                        <TabButton isSelected={selectTopic === "props"}
                                   onSelect={() => handleSelect('props')}>
                            Props </TabButton>
                        <TabButton isSelected={selectTopic === "state"}
                                   onSelect={() => handleSelect('state')}>
                            State </TabButton>
                    </menu>
                    <div id="tab-content">
                        {!selectTopic ? <p>Please select a topic.</p> : null}
                        {selectTopic ? <div id="tab-content"><h3>{EXAMPLES[selectTopic].title}</h3>
                            <p>{EXAMPLES[selectTopic].description}</p>
                            <pre>
                            <code>
                                {EXAMPLES[selectTopic].code}
                            </code>
                        </pre>
                        </div> : null}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
