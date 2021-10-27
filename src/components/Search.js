import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'


function Search({ hideButtons = false, term = "" }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState(term);
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__input_icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined" className="search__buttons_hidden">Google Search</Button>
                    <Button variant="outlined" className="search__buttons_hidden">I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    );
}

export default Search;
