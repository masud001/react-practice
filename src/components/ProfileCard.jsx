import React from 'react';  

const ProfileCard = ({ candidate }) => {  
    return (  
        <div className="profile-card">  
            <h3>{candidate.name}</h3>  
            <p><strong>Role:</strong> {candidate.role}</p>  
            <p><strong>Email:</strong> {candidate.email}</p>  
            <div>  
                <strong>Skills:</strong>  
                {candidate.skills.map((skill, index) => (  
                    <span key={index}>{skill}</span>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default ProfileCard;