db.createUser(
    {
        user: "top",
        pwd: "top",
        roles: [
            {
                role: "readWrite",
                db: "top_api_db"
            }
        ]
    }
);