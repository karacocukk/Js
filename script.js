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
counter ++ ; // en kısa yöntem( 1 artımak için kullanılır)
// console.log(counter)

counter -- ; // 1 azaltmak için kullanılır
counter -= 1 ;
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
