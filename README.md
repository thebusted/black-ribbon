# Black Ribbon

ตัวปล๊กอินนี้ใช้ Javascript สำหรับแสดงผลริบบิ้นสีดำเพื่อร่วมถวายความอาลัย โดยผมได้นำเอาเทคนิคของคุณเนยเจ้าของเว็บไซต์ [NUUNEOI.COM](http://nuuneoi.com/blog/blog.php?read_id=884) ที่ได้ให้ไว้ มาปรับให้สามารถใช้งานได้ง่ายขึ้น  

## Version
ตอนนี้ยังอยู่ในเวอร์ชั่น BETA สำหรับทดลองกันอยู่นะครับ หากมีข้อผิดพลาด หรือข้อเสนอแนะเพิ่มเติมสามารถแจ้งเข้ามาทาง [Issue](https://github.com/thebusted/black-ribbon/issues) ยินดีรับฟังทุกข้อเสนอแนะครับ

## Installation

นำส่วนของโค๊ด HTML ด้านล่างนำไปวางไว้ก่อนแท็ก `</body>`

```html
<script>
    (function(e,c,d,f,g,h,a,b){
    e.brb={x:g,y:h};b=c.getElementsByTagName(d)[0];
    a=c.createElement(d);a.async=1;a.src=f;
    b.parentNode.insertBefore(a,b)})
    (window,document,"script","//storage.googleapis.com/black-ribbon.appspot.com/js/black-ribbon.js","left","top");
</script>
```

## Configuration
การตั้งค่าตำแหน่งของริบบิ้น สามารถแก้ได้สองจุด
- `left` เป็น `right` หากใส่ค่าอื่นลงไปที่นอกเหนือจากนี้ `left` `right` จะถูกตั้งให้เป็น `left`
- `top` เป็น `bottom` หากใส่ค่าอื่นลงไปที่นอกเหนือจาก `top` `bottom` จะถูกตั้งให้เป็น `top`


#### ตัวอย่างการตั้งค่าแบบต่างๆ
**แสดงผลด้าน บน-ซ้าย**
```html
<script>
    ...
    ...
    ...
    ...
    (window,document,"script","//storage.googleapis.com/black-ribbon.appspot.com/js/black-ribbon.js","left","top");
</script>
```
**แสดงผลด้าน บน-ขวา**
```html
<script>
    ...
    ...
    ...
    ...
    (window,document,"script","//storage.googleapis.com/black-ribbon.appspot.com/js/black-ribbon.js","right","top");
</script>
```
**แสดงผลด้าน ล่าง-ซ้าย**
```html
<script>
    ...
    ...
    ...
    ...
    (window,document,"script","//storage.googleapis.com/black-ribbon.appspot.com/js/black-ribbon.js","left","bottom");
</script>
```
**แสดงผลด้าน ล่าง-ขวา**
```html
<script>
    ...
    ...
    ...
    ...
    (window,document,"script","//storage.googleapis.com/black-ribbon.appspot.com/js/black-ribbon.js","right","bottom");
</script>
```
