export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
npm run build
git add .
if test "$0" != ""
then
    git commit -m $0
else
    git commit '构建部署'
fi
git push