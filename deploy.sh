aws s3 sync . s3://"roberto-ortega-omdb-client" --exclude ".git/*" --acl "public-read"
open http://roberto-ortega-omdb-client.s3-website-us-west-2.amazonaws.com/
