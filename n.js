const socks5 = require('socksv5');

const srv = socks5.createServer((info, accept, deny) => {
  // === هنا تجد كلمة accept ===
    const socket = accept(); 

      if (socket) {
          // أمر الطباعة: سيظهر لك كل آي بي تحاول اللعبة الاتصال به
              console.log(`[+] حزمة بيانات مرسلة إلى: ${info.dstAddr}:${info.dstPort}`);

                  socket.setNoDelay(true); // لتقليل تأخير الطلقة
                      socket.setKeepAlive(true, 1000); 
                        }
                        });

                        srv.listen(1080, '0.0.0.0', () => {
                          console.log('=========================================');
                            console.log('   سيرفر بوبجي السريع يعمل الآن (1080)');
                              console.log('   راقب الشاشة عند الرمي في اللعبة... ');
                                console.log('=========================================');
                                });

                                srv.useAuth(socks5.auth.None());
                                