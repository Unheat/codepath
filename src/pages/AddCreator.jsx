import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
    const [creator, setCreator] = useState({ 
        name: "", description: "", imageURL: "", 
        youtube: "", twitter: "", instagram: "" 
    }); // oject hold all react vars

    const handleChange = (event) => {
        const {name, value} = event.target; // Finds out which box was typed in
        setCreator( (prev) => {
            return { ...prev, [name]: value } // Keeps the old data, updates the new keystroke
        })
    }
    const navigate = useNavigate() //teleporter
    const addCreator = async (event) => {
        //Stop the page from reloadin
        event.preventDefault();
        const finalCreator = {
            name : creator.name,
            description : creator.description,
            imageURL: creator.imageURL === "" ? null : creator.imageURL,
            youtube: creator.youtube === "" ? null : creator.youtube,
            twitter: creator.twitter === "" ? null : creator.twitter,
            instagram: creator.instagram === "" ? null : creator.instagram
        }
        //  Send the creator memory to the Supabase Vault using .insert()
        const {error} = await supabase
            .from('creators')
            .insert([finalCreator])
        if (error) {
                console.error("add user error", error);
        }

        navigate('/');
    }

    return (
        <div className="AddCreator">
            <h2>Add a New Creator</h2>
            
            <form onSubmit={addCreator}> 
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />

                <label>Image URL</label>
                <input type="text" id="imageURL" name="imageURL" onChange={handleChange} />

                <label>Description</label>
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange} required></textarea>

                {/* Social Links */}
                <h3>Social Media Links</h3>
                <label>YouTube (URL or @handle)</label>
                <input type="text" id="youtube" name="youtube" onChange={handleChange} />

                <label>Twitter/X (@handle)</label>
                <input type="text" id="twitter" name="twitter" onChange={handleChange} />

                <label>Instagram (@handle)</label>
                <input type="text" id="instagram" name="instagram" onChange={handleChange} />

                <button type="submit">Submit Creator</button>
            </form>
        </div>
    );
};

export default AddCreator;