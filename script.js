const randomBtn = document.querySelector('.btn');
randomBtn.addEventListener('click', getNumber);
let result = [
"1.	ADIB SULTHON MUAMMAL", 
"2.	AFI DWI AMINURRAHMAH",
"3.	ANASTASYA KUNSITA DEWI",
"4.	ANDREW MARULI TUA TAMPUBOLON",
"5.	AZKAS SALAM",
"6.	AZMI ZULFANI PUTRI",
"7.	BAGAS SETYAWAN",
"8.	BAGINDA SINAGA",
"9.	CECILIA PUTRI DIANTI SAMOSIR",
"10. DILLA LEONYKA PUTRI DEWAYANI",
"11. DINA YANTI NAINGGOLAN",
"12. DINDA ALFIRA ILMAYANTI",
"13. DIVA PUTRA PRATAMA",
"14. FARHAN MAULANA",
"15. FEZA RAFFA ARNANDA",
"16. FITRIA NUR RAHMAWATI",
"17. GILANG ABDUL JABBAR",
"18. HAMDANI",
"19. INAFIANTI KLARISTANIA RILANO",
"20. INGGID UTAMI",
"21. LILIS DWIYANTI",
"22. M. YANDRE FEBRIAN",
"23. MUHAMAD IQBAL PUTRA PRATAMA",
"24. MUHAMMAD AFNAN ALFIAN",
"25. MUHAMMAD DIVA AMRULLAH",
"26. MUHAMMAD NUR ALFIAN SYARIF",
"27. MUHAMMAD SULTAN HAFIZ",
"28. NATALIE MERRY ANGELINA",
"29. NUR AFIFAH",
"30. NUR AMALIYATUR ROHMAH",
"31. RIDHO PANGESTU",
"32. SEIZRA AULIA SALSABILA",
"33. SHABRINA ALFIRA NISA",
"34. SHELA ALFIYANI AMALIA",
"35. SONYA ANANTA PANJAITAN",
"36. SUHENDRA WIDI PRAYOGA",
'37. VENNY SEPTIA HARTONO',
'38. YAHYA ABDURROHMAN'
]; //Data Kelas 

let temp = [];


function getNumber() {
    const getAngka = document.querySelector(".angka").value;
    let selected= [];
    while (selected.length < getAngka) {
        const randNum = Math.floor(Math.random()*38)+1;
        const idx = result.indexOf(result[randNum]);
        if (temp.includes(result[randNum]) === false && result.includes(result[randNum])===true) {
            selected.push(result[randNum]);
            temp.push(result[randNum])
            result.splice(idx,1);
        };
    };
    console.log(result);
    console.log(selected);
    console.log(temp);  
    const txtArea = document.querySelector(".form-control");
    const radioBtn = document.querySelectorAll("input[name=radio-btn]");
    let selectedBtn='';
    for (let radbtn of radioBtn) {
        if (radbtn.checked) {
            selectedBtn = radbtn.value;
            if (selectedBtn === 'urutkan') {
                txtArea.innerHTML = selected.join("\n");
                console.log(getIndex);
                break;
            } else if (selectedBtn === 'acak') {
                txtArea.innerHTML = selected.join("\n");
                break;
            } 
        } 
    } 
    if (result.length - getAngka < 0) {
        alert("Ini Terakhir Sebelum Terpilih Semua");
        alert("Setelah ini Silahkan Restart Halaman")
    }
};


