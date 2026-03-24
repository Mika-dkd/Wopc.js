function FindProxyForURL(url, host) {
        // المواقع التي لا تحتاج لبروكسي (مثل الشبكة المحلية)
            if (isPlainHostName(host) || shExpMatch(host, "*.local")) {
                    return "DIRECT";
                        }

                            // إرسال باقي الطلبات إلى البروكسي الخاص بك
                                // استبدل 127.0.0.1 و 8080 ببيانات السيرفر الخاص بك
                                    return "PROXY 127.0.0.1:8080; DIRECT";
                                    }

