function sortUsernames(input) {
    let usernames = new Set(input);

    let sortedUsernames = Array.from(usernames)
        .sort((a, b) => a.length  - b.length || a.localeCompare(b));

    console.log(sortedUsernames.join("\n"));
}

sortUsernames(['Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);