# 🧠 MindShift Chatbot
Chatbot สำหรับรับฟังและช่วยสะท้อนความคิด (Reframing) สำหรับผู้ใช้ที่ต้องการระบายความเครียด โดยเน้น Empathy และการสื่อสารเชิงบวก

# 🔗 Integration
- ใช้งานร่วมกับ Google Apps Script API
- สามารถเชื่อมต่อและเปลี่ยน URL ของ Google Sheet ได้
- รองรับการโหลดไฟล์ MindShift_Tracker สำหรับบันทึกข้อมูลผู้ใช้

# 💬 Persona (คาแรคเตอร์)
- เป็นมิตร อบอุ่น และเห็นอกเห็นใจ (Empathy)
- เน้นการรับฟัง มากกว่าการให้คำแนะนำตรง ๆ
- สร้างพื้นที่ปลอดภัยให้ผู้ใช้ได้ระบายความรู้สึก

# 📏 Response Rules (กฎการตอบ)
- รับฟังและให้กำลังใจก่อนเสมอ
- ห้ามตัดสิน และห้ามสั่งสอน
- ใช้คำถามปลายเปิดเพื่อชวนคิด (Reframing)
- ตอบสั้น กระชับ (ไม่เกิน 3–4 บรรทัด)
- ลงท้ายประโยคด้วย "ครับ" เสมอ

# 📌 Example Response
"ฟังดูเหมือนคุณกำลังเหนื่อยมากเลยนะครับ
เรื่องนี้กระทบความรู้สึกคุณยังไงบ้างครับ"

# โครงสร้างข้อมูลใน Google Sheets

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| id | datetime | userid | name | mood | score | comment |

## 1. Deploy เป็น Web App
- สร้าง Google Sheets ใหม่
- ตั้งชื่อคอลัมน์ตามตารางข้างต้น (row แรก)
## 2. ติดตั้ง Script

1. เปิด Google Sheets → Extensions → **Apps Script**
2. ลบ **code** เดิมออกทั้งหมด
3. Copy code จากไฟล์ `Code.gs` วางลงไป
4. แทนที่ `YOUR_GOOGLE_SHEETS_URL_HERE` ด้วย URL ของ Google Sheets คุณ

```javascript
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/YOUR_ID/edit");
```

5. กด **Save** (Ctrl+S)

---

## 3. Deploy เป็น Web App

1. คลิก Deploy → **New deployment**
2. เลือก Type: **Web app**
3. ตั้งค่าดังนี้:

   - Execute as: **Me**
   - Who has access: **Anyone**
4. คลิก **Deploy** และ **copy Web app URL** ที่ได้

## 4. Deploy เป็น Web App
นำ Web app URL ไปใส่ใน Botnoi พร้อม parameters ดังนี้:

| Parameter | คำอธิบาย |
|---|---|
| `name` | ชื่อผู้ใช้ |
| `mood` | อารมณ์ |
| `score` | คะแนน |
| `comment` | ข้อเสนอแนะ |

**ตัวอย่าง URL:**

```
https://script.google.com/macros/s/AKfycby6mXHX_CwwGIZKmsXviZAGw6TJmXhO7fSgwlbM-rbVfJjWiLnea87VvPxuuQWwDz4/exec?name=John&mood=happy&score=5&comment=บริการดีมาก
```

## Response
Script จะส่งค่ากลับเป็น JSON:
```{
  "result":"added"
}
