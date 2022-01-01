npm run build
git add .
if test "$0" != ""
then
    git commit -m $0
else
    git commit '构建部署'
fi
git push