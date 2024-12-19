@php use Illuminate\Support\Facades\DB; @endphp
@extends('master')
@section('contents')
    <style>
        .fp-site-customdesc {
            background-color: #f8f9fa; /* Màu nền nhạt */
            padding: 2rem; /* Thêm padding */
        }

        .carousel-caption {
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
            padding: 20px;
            border-radius: 8px;
            max-width: 80%; /* Giới hạn chiều rộng cho caption */
            text-align: center;
        }

        .caption-title {
            font-size: 2rem;
            font-weight: bold;
            color: #f9f9f9;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .caption-text {
            font-size: 1.1rem;
            color: #e0e0e0;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }
    </style>
    <div class="page-body ">
        <div id="carousel-captions" class="carousel slide" data-bs-ride="carousel"
             style="max-height: 400px; overflow: hidden;">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img class="d-block w-100" style="height: 400px; object-fit: cover;"
                         src="{{asset('/assets/img/news-1.jpg')}}"/>
                    <div class="carousel-caption d-none d-md-block text-center text-white">
                        <h3 class="caption-title">Tri thức</h3>
                        <p class="caption-text">Nơi hội tụ kiến thức và nguồn cảm hứng học tập bất tận.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img class="d-block w-100" style="height: 400px; object-fit: cover;"
                         src="{{asset('/assets/img/news-2.jpg')}}"/>
                    <div class="carousel-caption d-none d-md-block text-center text-white">
                        <h3 class="caption-title">Sáng tạo</h3>
                        <p class="caption-text">Mở ra lối đi mới với kiến thức đa dạng và bài học thực tế.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img class="d-block w-100" style="height: 400px; object-fit: cover;"
                         src="{{asset('/assets/img/news-3.jpg')}}"/>
                    <div class="carousel-caption d-none d-md-block text-center text-white">
                        <h3 class="caption-title">Phát triển</h3>
                        <p class="caption-text">Đồng hành và phát triển cùng những khóa học hàng đầu.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img class="d-block w-100" style="height: 400px; object-fit: cover;"
                         src="{{asset('/assets/img/news-4.jpg')}}"/>
                    <div class="carousel-caption d-none d-md-block text-center text-white">
                        <h3 class="caption-title">Hội nhập</h3>
                        <p class="caption-text">Tiến tới thành công với kiến thức toàn cầu và kỹ năng chuyên sâu.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img class="d-block w-100" style="height: 400px; object-fit: cover;"
                         src="{{asset('/assets/img/news-5.jpg')}}"/>
                    <div class="carousel-caption d-none d-md-block text-center text-white">
                        <h3 class="caption-title">Tương lai</h3>
                        <p class="caption-text">Chuẩn bị cho tương lai với nền tảng kiến thức vững chắc.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" data-bs-target="#carousel-captions" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" data-bs-target="#carousel-captions" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>

        <div class="fp-site-customdesc d-flex align-items-center justify-content-center text-center py-5">
            <div class="container">
                <h1 class="display-4 fw-bold mb-3 text-primary text-center"
                    style="font-size: 2.5rem; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">
                    Hệ thống LMS - VLUTE</h1>
                <p class="lead text-secondary">Chào mừng bạn đến với Hệ Thống Đào Tạo giảng dạy trực tuyến. Khám phá
                    những kiến thức mới nhất và nâng cao kỹ năng của bạn.</p>
            </div>
        </div>

        <div class="container">
            <div class="container my-5">
                <h3 class="text-danger fw-bold">
                    KHÓA HỌC MỚI
                </h3>
            </div>
            <div class="row">

                <?php
                $recentClasses = DB::table('lop_hoc_phan')
                    ->join('hoc_phan', 'hoc_phan.id_hoc_phan', '=', 'lop_hoc_phan.id_hoc_phan')
                    ->orderBy('ngay_tao', 'desc')
                    ->limit(12)
                    ->get();
//                dd($recentClasses);
                ?>

                @foreach($recentClasses as $item)
                    <div class="col-md-3 mb-4">
                        <div class="card" style="height: 20rem;">
                            <img src="{{asset('/assets/img/book.jpg')}}" class="card-img-top mx-auto d-block"
                                 style="height: 10rem; width: auto;" alt="...">
                            <div class="card-body text-center">
                                <h5 class="text-danger">{{$item->ten_hoc_phan}}</h5>
                                <p class="card-text">{{$item->ten_lop_hoc_phan}}</p>
                                <a href="{{route('chi-tiet-lop-hoc-phan',['id'=>$item->id_lop_hoc_phan])}}" class="btn btn-danger">Xem Chi Tiết</a>
                            </div>
                        </div>
                    </div>
                @endforeach
        </div>

            <div class="container mt-5">
                <h3 class="text-danger fw-bold">TIN TỨC CHUNG</h3>

                <!-- Hướng dẫn khôi phục mật khẩu -->
                <div class="bg-white p-4 rounded shadow mb-4">
                    <div class="forumpost clearfix firstpost starter mb-3">
                        <h4 class="text-primary">HƯỚNG DẪN KHÔI PHỤC MẬT KHẨU DÀNH CHO SINH VIÊN</h4>
                    </div>
                    <div class="content mb-4">
                        <h5>Nội dung:</h5>
                        <ul class="list-unstyled">
                            <li>🔑 Nếu bạn gặp khó khăn trong việc khôi phục mật khẩu, vui lòng liên hệ qua email để được hỗ trợ cấp lại mật khẩu.</li>
                            <li>📧 Email liên hệ: 21004092@st.vlute.edu.vn hoặc 21004093@st.vlute.edu.vn.</li>
                        </ul>
                    </div>
                </div>

                <!-- Quy định chung khi sử dụng hệ thống -->
                <div class="bg-white p-4 rounded shadow mb-4">
                    <div class="forumpost clearfix firstpost starter mb-3">
                        <h4 class="text-primary">QUY ĐỊNH CHUNG KHI SỬ DỤNG HỆ THỐNG</h4>
                    </div>
                    <div class="content mb-4">
                        <h5>Nội dung:</h5>
                        <ul class="list-unstyled">
                            <li>🛡️ Người dùng phải bảo vệ tài khoản của mình, phải chịu trách nhiệm nếu cố tình để tài khoản của mình cho người khác lợi dụng sử dụng trái phép hoặc với mục đích xấu (phải đặt mật khẩu an toàn và không cung cấp cho bất kỳ ai).</li>
                            <li>📚 Chỉ sử dụng với mục đích học tập, không đưa nội dung không liên quan đến môn học lên website này.</li>
                            <li>💬 Khi thảo luận trên các diễn đàn phải sử dụng lời lẽ lịch sự, tôn trọng Thầy Cô và bạn bè, không tuyên truyền nội dung xấu, vi phạm quy định nhà nước.</li>
                            <li>🆔 Khai báo thông tin cá nhân phải chính xác, không dùng bí danh, họ tên tiếng Anh (trừ các bạn nước ngoài).</li>
                            <li>✅ Thực hiện đúng, đầy đủ các qui định do Giáo viên đưa ra đối với từng môn học.</li>
                        </ul>
                    </div>
                </div>

                <!-- Thông báo về thời gian nghỉ học -->
                <div class="bg-white p-4 rounded shadow mb-4">
                    <div class="forumpost clearfix firstpost starter mb-3">
                        <h4 class="text-primary">THÔNG BÁO VỀ THỜI GIAN NGHỈ HỌC</h4>
                    </div>
                    <div class="content mb-4">
                        <h5>Nội dung:</h5>
                        <ul class="list-unstyled">
                            <li>📅 Kỳ nghỉ Tết Nguyên Đán sẽ bắt đầu từ ngày 25 tháng 1 và kết thúc vào ngày 10 tháng 2. Sinh viên vui lòng lưu ý để điều chỉnh lịch học và bài tập của mình.</li>
                            <li>🏫 Trong thời gian nghỉ, các lớp học trực tuyến vẫn tiếp tục diễn ra theo lịch trình đã thông báo. Hãy đảm bảo tham gia đầy đủ.</li>
                        </ul>
                    </div>
                </div>

                <!-- Thông báo về tài liệu học -->
                <div class="bg-white p-4 rounded shadow mb-4">
                    <div class="forumpost clearfix firstpost starter mb-3">
                        <h4 class="text-primary">TÀI LIỆU HỌC TẬP MỚI NHẤT</h4>
                    </div>
                    <div class="content mb-4">
                        <h5>Nội dung:</h5>
                        <ul class="list-unstyled">
                            <li>📘 Các tài liệu học tập cho học kỳ này đã được cập nhật trên hệ thống Elearning. Sinh viên vui lòng đăng nhập để tải về các tài liệu cần thiết cho từng môn học.</li>
                            <li>📚 Các bài giảng và bài tập cũng đã được cập nhật đầy đủ. Hãy kiểm tra thường xuyên để không bỏ lỡ bất kỳ thông tin quan trọng nào.</li>
                        </ul>
                    </div>
                </div>

                <!-- Thông báo về buổi tư vấn học tập -->
                <div class="bg-white p-4 rounded shadow mb-4">
                    <div class="forumpost clearfix firstpost starter mb-3">
                        <h4 class="text-primary">BUỔI TƯ VẤN HỌC TẬP DÀNH CHO SINH VIÊN</h4>
                    </div>
                    <div class="content mb-4">
                        <h5>Nội dung:</h5>
                        <ul class="list-unstyled">
                            <li>🗓️ Buổi tư vấn học tập sẽ được tổ chức vào ngày 15 tháng 12. Sinh viên có thể đăng ký tham gia để nhận được sự hướng dẫn về phương pháp học tập hiệu quả.</li>
                            <li>💬 Buổi tư vấn sẽ diễn ra trực tuyến qua Zoom. Link tham gia sẽ được gửi qua email cho sinh viên đã đăng ký.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
            <div class="container mt-4 text-center">
                <div class="paging paging-morelink">
                    <a href="{{route('nha-cua-toi')}}" class="btn btn-outline-primary px-4 py-2 fw-bold rounded-pill">
                        Các khóa học của tôi
                    </a>
                </div>
            </div>
        </div>
    </div>
    <script>

    </script>
@endsection
