export default function getMatches(regex, str) {
    var matches = [];
    var match;
    do {
        match = regex.exec(str);
        if (match) {
            matches.push(match[1]);
        }
    } while (match);
    return matches;
}
//# sourceMappingURL=regex.js.map