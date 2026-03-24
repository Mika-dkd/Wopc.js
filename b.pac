function FindProxyForURL(url, host) {
        if (shExpMatch(host, "*.playbattlegrounds.com") || 
                shExpMatch(host, "*.pubgmobile.com") || 
                        shExpMatch(host, "*.proximabeta.com") ||
                                shExpMatch(host, "*.igamecj.com")) {
                                        
                                                // يجب أن يكون الرابط في سطر واحد وبدون مسافات
                                                        return "SOCKS5 jubilant-fiesta-7vg575rjj5jhxv5v-5000.app.github.dev:443; DIRECT";
                                                            }

                                                                return "DIRECT";
                                                                }
                                                                
