import { useState, React } from 'react'

export default function Textarea(props) {

    const handleclick = () => {
        const newtext = text.toUpperCase()
        setText(newtext)
        props.showalert('text tranform in to upperCase!', 'success')
    }
    const handlelowerclick = () => {
        const newtext = text.toLowerCase()
        setText(newtext)
        props.showalert('text tranform in to lowerCase!', 'success')
    }
    const handlecopyclick = () => {
        const copy = document.getElementById("box")
        copy.select();
        navigator.clipboard.writeText(copy.value)
        props.showalert('text have been selected!', 'success')
    }
    const handleclearclick = () => {
        const newtext = ""
        const c = confirm('do you want to clear this text?')
        if (c == true) {
            props.showalert('search text have been clered!', 'success')
            setText(newtext)
            setSearch(newtext)
            setReplaced(newtext)
        }
    }
    const removeExtraSpaces = () => {
        const cleanedText = text.replace(/\s+/g, ' ').trim();
        setText(cleanedText);
        props.showalert('extraspace removed on this text!', 'success')
    };
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const handleonchange3 = (event) => {
        setReplaced(event.target.value);
    }

    const capitalize = () => {
        const words = text.toLowerCase().split(" ");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const capitalizedText = capitalizedWords.join(" ");
        setText(capitalizedText);
        props.showalert('text tranform in to capitalize!', 'success')
    }


    const [replace, setReplaced] = useState("");

    const replaceWord = () => {
        const updatedText = text.replace(new RegExp(search, 'g'), replace);
        setText(updatedText);
        props.showalert('text is replaces!', 'success')
    };



    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [occurrences, setOccurrences] = useState([]);

    const handleonchange2 = (event) => {
        setSearch(event.target.value);
    }
    const handleSearch = () => {
        const words = text.split(" ");
        const occurrences = words.filter(words => words === search);
        setOccurrences(occurrences);
    };
    const handleclearsearchclick = () => {
        const newsearch = ""
        const c = confirm('do you want to clear this text?')
        if (c == true) {
            props.showalert('search text have been clered!', 'success')
            setSearch(newsearch)
        }
    }

    return (
        <>
            <div className="mb-3">
                <h1 className={`my-2 text-${props.mode === 'light' ? 'primary' : 'light'}`}>{props.hedding}</h1>
                <textarea className={`outline form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray' }} id="box" rows="10" placeholder='Enter your text here' ></textarea>
                <div className='d-flex'>
                    <input className={`form-control my-2 me-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} type="text" value={search} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray' }} onChange={handleonchange2} placeholder="Word to Search" />
                    <input className={`form-control my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} type="text" value={replace} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray' }} onChange={handleonchange3} placeholder="Word to replace" />
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={handleclick}>upperCase </button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={handlelowerclick}>lowerCase </button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={capitalize}>capitalize </button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={handlecopyclick}>copy text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={removeExtraSpaces}>clear extra space</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={handleSearch}>search specific words</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={replaceWord}>replace specific words</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary'} my-3 me-2`} onClick={handleclearclick}>clear text</button>
            </div>
            <div className="container px-0" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 className={`text-${props.mode === 'light' ? 'primary' : 'light'}`}>your text summary</h2>
                <p className='font-200'>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} m/s</p>
                <h2 className={`my-2 text-${props.mode === 'light' ? 'primary' : 'light'}`}>text preview</h2>
                <p>{text.length === 0 ? 'enter your text to see privew' : `${text}`}</p>
                <h2 className={`my-2 text-${props.mode === 'light' ? 'primary' : 'light'}`}>search result</h2>
                <p>
                    The word <strong>'{search}'</strong> was found <strong>{occurrences.length}</strong> times.
                    Occurrences found: {occurrences.join(', ')}
                </p>
                <h2 className={`my-2 text-${props.mode === 'light' ? 'primary' : 'light'}`}>remove word result</h2>
                <p>
                    The word <strong>'{search}'</strong> was replaced <strong>{replace}</strong> times.
                </p>
            </div>
        </>
    )
}