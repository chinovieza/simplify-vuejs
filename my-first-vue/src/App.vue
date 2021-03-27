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
        <div class="container mt-4">
            <div class="row">
                <div class="col border">1 จาก 3 collumn</div>
                <div class="col border">2 จาก 3 collumn</div>
                <div class="col border">3 จาก 3 collumn</div>
            </div>
            <div class="row">
                <div class="col border">1 จาก 4 collumn</div>
                <div class="col border">2 จาก 4 collumn</div>
                <div class="col border">3 จาก 4 collumn</div>
                <div class="col border">4 จาก 4 collumn</div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col border">1 จาก 3 collumn กว้างอัตโนมัติ</div>
                <div class="col border">2 จาก 3 collumn กว้างอัตโนมัติ</div>
                <div class="col border">3 จาก 3 collumn กว้างอัตโนมัติ</div>
            </div>
            <div class="row">
                <div class="col border">1 จาก 3 collumn กว้างอัตโนมัติ</div>
                <div class="col col-6 border">2 จาก 3 collumn กว้าง 6/12</div>
                <div class="col col-2 border">3 จาก 3 collumn กว้าง 2/12</div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-4 border">col-sm-4 1 จาก 3 collumn</div>
                <div class="col-sm-4 border">col-sm-4 2 จาก 3 collumn</div>
                <div class="col-sm-4 border">col-sm-4 3 จาก 3 collumn</div>
            </div>
            <div class="row">
                <div class="col-sm-3 border">col-sm-3 1 จาก 4 collumn</div>
                <div class="col-sm-3 border">col-sm-3 2 จาก 4 collumn</div>
                <div class="col-sm-3 border">col-sm-3 3 จาก 4 collumn</div>
                <div class="col-sm-3 border">col-sm-3 4 จาก 4 collumn</div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row mt-4">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="https://loremflickr.com/400/200" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-6 col-sm-3 mt-2">
                    <img class="img-fluid" src="https://loremflickr.com/400/200">
                </div>
                <div class="col-6 col-sm-3 mt-2">
                    <img class="img-fluid" src="https://loremflickr.com/400/200">
                </div>
                <div class="col-6 col-sm-3 mt-2">
                    <img class="img-fluid" src="https://loremflickr.com/400/200">
                </div>
                <div class="col-6 col-sm-3 mt-2">
                    <img class="img-fluid" src="https://loremflickr.com/400/200">
                </div>
            </div>
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