import {useState} from "react";

function List({contactsList}) {
    const [filterText, setFilterText] = useState("");

    const filtered = contactsList.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        );
    });
    // listeyi aldık filter ile filtreledik. object.keys methodu ile her bir iteme aldık. some methodu ile key kontrolu yaptık(name, phoe farketmez)
    return (
        <div>
            <h1>Contact List App</h1>
            <input
                type="text"
                placeholder="Search"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className="list">
                {
                    filtered?.length > 0 && filtered.map((row, index) => (
                            <li key={index}>
                                <span>{row.name}</span>
                                <span>{row.phone}</span>
                            </li>
                    ))
                }
            </ul>
            <p>Total Contacts ({filtered.length})</p>
        </div>
    );
}

export default List;
