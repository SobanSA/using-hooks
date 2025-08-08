import { useState, useEffect } from "react";

function RandomUserCard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?inc=name,location,dob&results=1")
            .then((res) => res.json())
            .then((data) => {
                setUser(data.results[0]); // Only one user because results=1
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <h3>
                {user.name.title} {user.name.first} {user.name.last}
            </h3>
            <p>
                <strong>Location:</strong> {user.location.city}, {user.location.state},{" "}
                {user.location.country}
            </p>
            <p>
                <strong>Date of Birth:</strong>{" "}
                {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})
            </p>
        </div>
    );
}

export default RandomUserCard;
