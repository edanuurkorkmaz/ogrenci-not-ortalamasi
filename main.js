/* Bir öğrencinin aldığı ders notlarının ortalamasını hesaplayan bir fonksiyon yazın.

Fonksiyonun:  

Notların bir dizisini parametre olarak alması,

Ortalama değeri döndürmesi,

Ortalama üzerinden bir harf notu belirlemesi (A, B, C, D, F) gereklidir.

Adımlar:  

Fonksiyon grades adında bir dizi parametresi alır.

reduce metodu ile tüm notlar toplanır.

Toplam değer, dizi uzunluğuna bölünerek ortalama hesaplanır.

Ortalama değerine göre harf notu atanır:

90 ve üzeri: A

80-89: B

70-79: C

60-69: D

60’ın altı: F

Hem ortalama hem de harf notu döndürülür. */

 const grades = [45,34,100,97];

function calculatingGrade(grades){
    const total = grades.reduce((sum, grade) => sum + grade,0);

    const average = total / grades.length;

    let letterGrade = '';
    if (average >= 90) {
      letterGrade = 'A';
    } else if (average >= 80) {
      letterGrade = 'B';
    } else if (average >= 70) {
      letterGrade = 'C';
    } else if (average >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }

    return {average, letterGrade};
}

const result = calculatingGrade(grades);

console.log(result);
