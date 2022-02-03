function array (value){
    const result = value.map (el => {
        const newArry = ""
        return el += newArry
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result, split.join(' '));
}
array(['hallo','nama','saya',['nanda','sakila',['kelas',['11', ['rpl','1']]]]])
