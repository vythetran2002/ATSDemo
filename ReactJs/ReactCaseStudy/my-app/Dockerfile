# Sử dụng một image nodejs làm cơ sở
FROM node:14

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép các file trong dự án vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Chạy ứng dụng khi container được khởi chạy
CMD ["npm", "start"]
