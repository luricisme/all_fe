## BEM
- Là tiêu chuẩn đặt tên class khi viết CSS

## Ý nghĩa
- Viết tắt của: Block Element Modifier
- Block: Khối
- Element: Thành phần trong khối
- Modifier: Bổ sung ý nghĩa cho "Block" hoặc "Element"

--> Ví dụ nếu có sự thay đổi khi mà thay đổi trạng thái của một thành phần trên trang web --> Thì ta chỉ việc thêm class mới vào (Class đó được set up trạng thái sẵn) --> Như vậy thì ta sẽ thay đổi được trạng thái của t hành phần đó (Ý nghĩa của Modifier).

## Tại sao phải dùng BEM
- Mỗi người đặt một kiểu.
- Members đặt class trùng nhau, CSS đè lên nhau.

## Cú pháp
- .block
- .block__element

- .block--modifier (modifier bổ sung ý nghĩa cho block)
- .block__element--modifier

## Tính ứng dụng
- Xây dựng layout website.
- Xây dựng thành phần trên website.

## Ưu điểm
- Tính rõ ràng.
- Tái sử dụng dễ dàng.
- Giúp cả team làm việc với nhau dễ dàng.
- Tính module, không lo CSS của class này ảnh hưởng đến CSS của class khác.

## Nhược điểm
- Tên class dài.
- Một số người cho là xấu.

## Khi nào sử dụng BEM là phù hợp?
- Dự án nhiều members.
- Dự án lớn, số lượng pages nhiều hoặc số lượng các thành phần trên giao diện nhiều.

## Thực hành
- Làm button.
- Làm message.
- Làm 1 thành phần trên trang web.