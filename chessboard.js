let height = 8;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; i++) {
        if ((i + j) % 2 == 0) {
            console.log('*');
        } else {
            console.log('#');
        }
    }
    console.log('\n')
}