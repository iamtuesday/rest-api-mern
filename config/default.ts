export default {
  port: 1337,
  dbUri: "mongodb+srv://iamtuesday:iamtuesday@cluster0.ike2rsq.mongodb.net",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxQI/okec1FZ523muEFyV
  vwZIT7VOefKrx7kfl3OLGS6EB+Om8cXy4ZwBIulP+MuY1yw8m30t4TCn4fj+9Y5C
  R6HKrULiOdaOwsxfhO+2LYhBBVeQ/zUPv+cEvPezkkjNqQZGCKHbR4co9/ns/H6q
  C8sCrYMe4KrektVePoVT8m7Se68iqzx3Kj1a+uJxpcEQaKjKwO5cAKXhoYZb02x+
  1o+JeJNLVSXYo9o6vqf8b11KUqnZh6LeLGCeDTBtsSDBhYbwgTgPNamELa63WpBt
  3zAYsCcT8h6wSl0y6oUxT2SrcweYnrPfGM5dZ7k6nge3UIPf1wURgevp0RaNGDrq
  0QIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN ENCRYPTED PRIVATE KEY-----
  MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI6dLmJq5fqx4CAggA
  MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBDKkWhKYuhzQ3myxaDGY6QXBIIE
  0AQadR6yrlHmxaF4+B1Js4qfQvcO7vSvH4NtxT0RIhmkKRMK51GrcDDW+Qecvr45
  DyFP6Le3k+hi8vvT+EirBvfDH7T92zS3jKFpoYFS1A0tmI7OGUtEKKzwWsYsp6TG
  7rZdGQYLnoONsipaGggUzsZIMSYI/HY7Avl47rcoK8tImr5wES1tBOJsb7VPHnPZ
  Fs3ZEvct2qzU8jdpQNoFqKY3Sxri1nMQoGxko+Ljf1ijoL9N6gitk9VG9mqYyF2s
  pbfUpAo8SopXYt8EaLa+OdYvnkNJ/PSXGu9zuoBXhyhQB94Az3AGCnuAtV5yfG2Z
  b1h2fni3uTW09K2yR3dnZ5hXpJH6r66epXT1YMahni978ha/PSgIurkfiLhro8GV
  9sS5vU40nKqlQy1zAx0BTGiGgcP9jBTgcrfQ/9MvDZ93zfF+NSDzXRsxgIiuzjGm
  j1cSAEd5YXuzj4H53rJgIfZvzsIsbHu71TLsz4UIHTwSin6DjRIKIaKNHX00DZ4r
  ekeUb7braZ8b9V9GVYFGDFRpBBvSZiTT3YQVfoQjx5UvSo37Xtl+vnrK/bDEdiTx
  HYzwed84/UJx1eQ5kXaskijHI0SSxlhuaUGEr0hFtTxyVxI+xJ5smsucvwWz62cq
  IsnKy6KjogHhFLO4QhJghnuUwqXZMkU2epDOtGv+Zh8S4Iw5IT6hulNQ494HUXdK
  /RpsF/cn/RTQ7MdOxT+8quinQ/d/ZnbeiljhA9vQD8xM2anyzZ2fyGeKePES9cRi
  4vF4ZnmLaSkHnOLMebU5IAeKyybenO9T8uG4jczDpUj0x+fyZhSO5VKuMQ0JvQet
  BLmWeDoUCr3d8tAFlRZMcX2iqswXOzVa+aSOinaZCe1gUrW1EZmxJpCA9LSVYHS8
  vnvSu3ESazJV8QIx1a+fJWlBhEnevqL5nkve1iMoHIYB4TWVEMuFIGiLN64qL5s0
  Jw6dwcC4M2WG3sH5ITHk7sUxvac1yGecZV6RcASEjLvAsQTpCemGZ/PPQVYOKe2A
  lPmXyCzGe4ER5ROz0Y51XHWhrUqoEuzNn1TYW7x0a6IzagoSvuzJglrJi0gxuDTc
  nGGq6GJ1JHCnAIEMOOVDNBVDqILAXFAwKsfndEDrBGY4jhB1zKjEv36F9wloVfBp
  PsHNQPtZ9oCVNNC9ZSZhILm8b8YTW4VN/ICqT6XH7NxbbDNcNhyRj9nwhB7xZYIX
  W2Myx9eJSQKBz3OuoYVJlUcmcXmnZ0/9JwpUFP84KqEFKSGaXrmo6Ln1bHmQpGaJ
  JLz63L3giCEVmJmEt19fFuE0ZgucVuNmpuUYN/5QOSE9IHUVLjUkTmjraddz4Lmm
  mjTiNemY1UEKnFnQvXfypstdvU/1HpRujt+jAcAd0wzPbawbuZB5lwJ9zCuVUsSf
  AkdSYhUXskR3oDFItDsPkualF8mABNDrIq0XCtrScNHwCRlnk9inCEi+hIEmxyYk
  dEBfG5I/rm4PER9T0MogiV0i4nwsJM0YHlE4nxWkiE4b56SMuoimEPXfWNHYYcVx
  rKfO3DeZj0RqNFid3faXLajXNNh1GmaxvMxFFoAcfISTGMPzuzB18dn0REOKnfnE
  6S2nnTRR8Z6vT25NC7ATtpHidfiQPq4BvEXjc0ENkeEO
  -----END ENCRYPTED PRIVATE KEY-----`,
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
