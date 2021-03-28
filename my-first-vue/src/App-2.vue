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
        <div class="container mt-4">
            <div class="row d-block">
                <div class="alert-success">ข้อความนี้แสดงในทุกอุปกรณ์</div>
            </div>
            <div class="row d-none d-md-block">
                <div class="alert-danger">ข้อความนี้แสดงเฉพาะบนคอมและแท็บเล็ต (md upper)</div>
            </div>
        </div>
        <div class="container mt-4">
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <label for="selectName">เลือกมือถือ</label>
                    <select class="form-control" id="selectName">
                        <option>iPhone</option>
                        <option>Android</option>
                        <option>Blackberry</option>
                        <option>Windows Phone</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="myFile">เลือกไฟล์</label>
                    <input type="file" class="form-control-file" id="myFile">
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" name="myRadio" class="form-check-input" id="myRadio1">
                    <label class="form-check-label" for="myRadio1">ชาย</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" name="myRadio" class="form-check-input" id="myRadio2">
                    <label class="form-check-label" for="myRadio2">หญิง</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="myCheck1" value="ok">
                    <label class="form-check-label" for="myCheck1">ยอมรับเงื่อนไข</label>
                </div>
                <button type="submit" class="btn btn-primary">OK</button>
            </form>
        </div>
        <div class="container mt-4 text-center">
            <table class="table table-striped mb-3">
                <thead>
                    <tr>
                        <td>ลำดับ</td>
                        <td>รายการ</td>
                        <td>ราคา</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Final Cut Pro</td>
                        <td>319</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>HTML + Java Script</td>
                        <td>259</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr class="table-info">
                        <td>ลำดับ</td>
                        <td>รายการ</td>
                        <td>ราคา</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-danger">
                        <td>1</td>
                        <td>iPhone</td>
                        <td>319</td>
                    </tr>
                    <tr class="table-warning">
                        <td>2</td>
                        <td>Android</td>
                        <td>259</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container mt-4">
            <div class="row mt-3">
                <div class="dropdown col-4 mx-auto">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">เลือกผลไม้</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">ส้ม</a>
                        <a class="dropdown-item" href="#">กล้วย</a>
                        <a class="dropdown-item" href="#">มะพร้าว</a>
                        <a class="dropdown-item" href="#">แตงกวา</a>
                        <a class="dropdown-item" href="#">ผักกาด</a>
                        <a class="dropdown-item" href="#">ส้มโอ</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row mt-3">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#targetModal"
                    >เปิดหน้าต่างป๊อปอัพ</button>
                <div
                    class="modal fade"
                    id="targetModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">ชื่อโมดอล</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                เนื้อหาที่อยู่ในป๊อปอัพ
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
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