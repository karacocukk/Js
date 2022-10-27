// document.write("merhaba dünya")
// console.log("merhaba dünya")
// alert("merhaba dünya")

// let ve const ile değişken tanımlama

// var ile değişken tanımlama *********

// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile bos değişken tanımlaa
// let ile tanımlanan değişkenler güncellenebilir.
let serverName;
// console.log(serverName)
// let ile  değişkene bilgi tanımlaa
serverName = "https//kodluyoruz.com"
// console.log(serverName)

let password = "12345"
// console.log(password)

let fullName = "veysel okatan"
// let ile tanımlanan bilgiyi değiştirme
fullName = "lorem ipsum dolor"

// fullName = fullName + " Yeni bilgi"
// console.log(fullName)

fullName = "Sifirlandi"
fullName += " ve yeni bilgi eklendii"
// console.log(fullName)
// console.log(fullName)

// Const ile değişken tanımlama ( değişmemesi gereken bilgiler için)
// const ile tanımlanan değişkenler değiştirilemez
const server_Password = "bubirşifre"

// console.log(serverPassword)

// document.write("hello world");

let price = 100
let tax = 0.18
let total_price = (price * tax) + price

// console.log("toplam fiyat = " + total_price)


let counter = 320
counter = counter + 1 //uzun yöntem
counter += 1;
counter++; // en kısa yöntem( 1 artımak için kullanılır)
// console.log(counter)

counter--; // 1 azaltmak için kullanılır
counter -= 1;
// console.log(counter) 

counter *= 10;
// console.log(counter) 


counter /= 2;
// console.log(counter) 

// islem önceliği:
// console.log((2 + 3) * 10)

// mod alma % (kalan bulma) : 
// console.log( 14 % 2) kalan bularak tek mi çift mi bulabiliriz.

// console.log("koli kalan  örnegi:" , 20 % 3)


// ust alma ** :
// console.log(2 * 2 * 2) 
// console.log( 2 ** 3)


// asagi yuvarlama islemi -> math.floor : 
// console.log("Asagi yuvarlama: ",Math.floor(1.8) )

// // yukarı yuvarlama islemi -> math.ceil : 
// console.log("Yukarı yuvarlama: ", Math.ceil(1.9))

// // yakına yuvarlama islemi -> math.round : 
// console.log("Yakina yuvarlama: ", Math.round(1.5)) // 1.2 -> 1 , 1,4 -> 1 , 1,5 -> 2

// let srting_Number = "11"
// console.log(srting_Number)

// let new_number  = Number(srting_Number)
// console.log(new_number)
// console.log("Number Counstructor  icine bilgi gönderildi : ",Number("25"))


// let username = "veysel"
// const domain = "kodluyoruz.org"

// let email = username + "@" + domain

// console.log("merhaba",username,"sitemize hoşgeldin","mail adersin:",email)

// let info = `Merhaba ${username} sitemize hoşgeldin.. mail adresin ${email}
// mail adresinin uzunluğu: ${email.length}
// borcunuz:${(2 + 3) * 10} TL
// Günün saat bilgis: ${new Date().getHours()} 
// Kisa isminiz:${username[0]}.
// `
// console.log(info)

// let old_string = "En sevdiğim oyunlar : call of duty ve counter-strike"
// let String_bilgi = `
// En sevdigim yemekler : 
// İskender
// Manti
// // `

// console.log(old_string)
// console.log(String_bilgi)

// a = 5
// b = 9

// sonuc = `
// sonuc : ${a} ve ${b} nin carpimi = ${a*b}

//     `

// console.log(sonuc)

// const ad =`Aycan`
// const soyad =`Yerdelen`
// const gozRengi =`Kahverengi`
// const yas =21

// const kisi = "<p>"+ad+"</p>"+
//               "<p>"+soyad+"</p>"+
//               "<p>"+gozRengi+"</p>"+
//               "<p>"+yas+"</p>"
// console.log(kisi)

// document.body.innerHTML = kisi;

// function test(a,b){
//     var result = `${a} ${a>b ? "Büyüktür": "Küçüktür"} ${b}'den`;
//     return result
// }
// console.log(test(10,8))



let email = "karacocukk98@gmail.com"
let first_name = "veysel"
let Last_name = "Okatan"

// console.log(email.length) --> nesne uzunluğunu verir

// console.log(first_name[0]) --> ilk karakteri bulmak
// console.log(first_name.charAt(0)) --> ilk karakteri bulmak

// first_name = first_name.toUpperCase() --> Hepsini büyük harf yapma
// console.log(first_name) 

// first_name = first_name.toLowerCase()
// console.log(first_name)

// console.log(email.search("@")) --> aradigimiz itemi bulma
// console.log(email[12])
// email.search("olmayan bilgi") --> bir karakter yoksa -1 döndürür.
// email.slice(1,10) --> email bilgisinin 1 den 10'a kadar olan kısmını al..

// let Domaın= email.slice(email.search("@")+1)
// console.log(Domaın)

// console.log(
//     Domaın.slice(0,Domaın.indexOf(".")) // Sadece "gmail" bilgisi aldık..
// )

// email = email.replace('gmail.com','kodluyoruz.org') --> bilgiyi güncellem
// console.log(email)

// istediğim bilgi var mı ? 
// email.includes("asdajskdl") --> false
// email.includes("k") --> true

// istediğim biliyle basladı mı / bitti mi ?
// email.endsWith("com") --> true
// email.startsWith("kara") --> true

// ilk harflerini büyük yapmak

let full_name = `${first_name[0].toLocaleUpperCase} ${first_name}`
console.log(fullName)