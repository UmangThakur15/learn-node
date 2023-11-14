const args = process.argv;

if (args.length > 2) {
    args.slice(2).forEach((v, i) => console.log(`${v}`));
} else {
    console.log('Args not found');
}
