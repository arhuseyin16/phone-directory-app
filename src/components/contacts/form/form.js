import {useState} from "react";

const clearForm  = {name: "", phone: ""};
function Form({addContacts, contacts}) {
    const [form, setForm] = useState({name: "", phone: ""});
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.name === '' || form.phone === '') {
            return false;
        }
        addContacts([...contacts, form]);
        setForm(clearForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    autoComplete="off"
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    autoComplete="off"
                    onChange={onChangeInput}
                />
            </div>
            <div className="btn">
                <button>Add</button>
            </div>
        </form>
    );
}

export default Form;
