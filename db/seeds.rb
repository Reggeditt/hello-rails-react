# seed database with 5 greeting messages
Message.destroy_all

Message.create!([
    { content: "Hello, World!" },
    { content: "You're awesome!" },
    { content: "Good morning!" },
    { content: "Good afternoon!" },
    { content: "Good evening!" }
])