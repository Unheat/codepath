import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client'; // Your bridge to the vault

const ViewCreator = () => {
    const { id } = useParams();

    const [creator, setCreator] = useState(null);
    useEffect(() => {
        const fetchSingleCreator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single;

            if(error) {
                console.error("Could not fetch creator", error);
            } else {
                setCreator(data)
            }
        };
        fetchSingleCreator();

    }, [id]); // if the URL ID changes, it runs again
    // the creator page layout
    return (
        <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* TWITTER / X */}
            {creator.twitter && (
                <a href={`https://twitter.com/${creator.twitter}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
                    <img src="/icons/twitter.png" alt="Twitter" style={{ width: '24px' }} />
                    @{creator.twitter}
                </a>
            )}

            {/* INSTAGRAM */}
            {creator.instagram && (
                <a href={`https://www.instagram.com/${creator.instagram}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
                    <img src="/icons/instagram.png" alt="Instagram" style={{ width: '24px' }} />
                    @{creator.instagram}
                </a>
            )}

            {/* YOUTUBE */}
            {/* Note: YouTube sometimes uses @ for handles now, but their URLs often look like youtube.com/@username */}
            {creator.youtube && (
                <a href={`https://www.youtube.com/@${creator.youtube}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
                    <img src="/icons/youtube.png" alt="YouTube" style={{ width: '24px' }} />
                    @{creator.youtube}
                </a>
            )}

        </div>
    );
};

export default ViewCreator;