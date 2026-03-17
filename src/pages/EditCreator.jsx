import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams(); //take id in path: "/view/:id",
    const navigate = useNavigate();

    const [creator, setCreator] = useState({
        name: "", description: "", imageURL: "",
        youtube: "", twitter: "", instagram: ""
    });

    useEffect(() => {
        const fetchSingleCreator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if(error) {
                console.error("Could not fetch creator", error);
            } else {
                setCreator(data)
            }
        };
        fetchSingleCreator();

    }, [id]); // if the URL ID changes, it runs again

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const updateCreator = async (event) => {
        event.preventDefault();

        // The Data Cleaner (Same as AddCreator!)
        const finalCreator = {
            name: creator.name,
            description: creator.description,
            imageURL: creator.imageURL === "" ? null : creator.imageURL,
            youtube: creator.youtube === "" ? null : creator.youtube,
            twitter: creator.twitter === "" ? null : creator.twitter,
            instagram: creator.instagram === "" ? null : creator.instagram
        };

       
        const {error} = await supabase.from('creators').update(finalCreator).eq('id', id);
        if (error){
            console.error("Could not fetch creator", error);
        } else {
            // Teleport home after updating
            navigate('/');
        }
    };

    const deleteCreator = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this creator?");
        if (confirmDelete) {
            await supabase.from('creators').delete().eq('id', id);
            navigate('/'); // Teleport home after deleting
        }
    };

    return (
        <div className="EditCreator">
            <h2>Edit Creator</h2>

            <form onSubmit={updateCreator}>
                {/* Notice the value={creator.name} - this forces the box to show the Pre-Loaded data! */}
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />

                <label>Image URL (Optional)</label>
                <input type="text" id="imageURL" name="imageURL" value={creator.imageURL || ""} onChange={handleChange} />

                <label>Description</label>
                <textarea rows="5" cols="50" id="description" name="description" value={creator.description} onChange={handleChange} required></textarea>

                <h3>Social Media Links</h3>
                <label>YouTube (URL or @handle)</label>
                <input type="text" id="youtube" name="youtube" value={creator.youtube || ""} onChange={handleChange} />

                <label>Twitter/X (@handle)</label>
                <input type="text" id="twitter" name="twitter" value={creator.twitter || ""} onChange={handleChange} />

                <label>Instagram (@handle)</label>
                <input type="text" id="instagram" name="instagram" value={creator.instagram || ""} onChange={handleChange} />

                <button type="submit">Update Creator</button>
            </form>

            {/* We keep the Delete button outside the form so it doesn't accidentally trigger an update */}
            <button className="delete-btn" onClick={deleteCreator}>Delete Creator</button>
        </div>
    );
};

export default EditCreator;