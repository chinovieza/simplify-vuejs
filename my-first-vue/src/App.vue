<template>
    <div class="container">
        <div class="container mt-4">
            <div>This content is in Bootstrap's container</div>
        </div>
        <div class="container mt-4">
            <button type="button" class="btn btn-secondary">secondary</button>
            <button type="button" class="btn btn-success">success</button>
            <button type="button" class="btn btn-danger">danger</button>
            <button type="button" class="btn btn-warning">warning</button>
            <button type="button" class="btn btn-info">info</button>
            <button type="button" class="btn btn-light">light</button>
            <button type="button" class="btn btn-dark">dark</button>
            <button type="button" class="btn btn-link">link</button>
        </div>
        <div class="container mt-4">
            <button type="button" class="btn btn-primary mr-2">
                <i class="fas fa-home fa-3x"></i>
            </button>
            <button type="button" class="btn btn-danger">
                <i class="fas fa-trash fa-3x"></i>
            </button>
            <button type="button" class="btn btn-primary btn-sm mr-3">
                <i class="fas fa-address-card fa-3x"></i>
            </button>
        </div>
        <div class="container mt-4">
            <button type="button">ปุ่มธรรมดา</button>
            <button type="button" class="btn btn-primary">ปุ่มสีฟ้า</button>
            <button type="button" class="btn btn-secondary">ปุ่มสีเทา</button>
            <button type="button" class="btn btn-success">ปุ่มสีเขียว</button>
            <button type="button" class="btn btn-warning btn-lg">ปุ่มเตือนขนาดใหญ่</button>
        </div>
        <div class="container mt-4">
            <div>ข้อความธรรมดาไม่ตกแต่งอะไรเลย</div>
            <div class="alert-success">แสดงข้อความว่าได้ทำสำเร็จแล้วนะ</div>
            <div class="alert-warning">แสดงข้อความเตือนว่ามีสิ่งผิดปกติ</div>
            <div class="alert-info">แสดงข้อมูลทั่วไปกับผู้ใช้</div>
            <div class="alert-danger">ข้อความเตือนภัยร้ายแรง</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "app"
}
</script>
<style>
</style>