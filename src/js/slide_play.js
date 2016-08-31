;(function(a) {
    a.fn.sliderPlay = function(b) {
        var c = {
            btnBox: 'btnBox',
            btnCurClassName: 'cur',
            direction: 'left',
            mouseEvent: 'click',
            speed: 600,
            timeout: 5000
        };
        var b = a.extend(c, b)
          , d = a(this)
          , e = d.find('ul')
          , f = e.find('li').first()
          , g = a('#' + b.btnBox).children()
          , h = e.find('img')
          , i = h.length
          , j = h.first().outerWidth()
          , k = h.first().outerHeight()
          , l = null
          , m = 0
          , n = 0
          , o = true;
          a(window).resize(function(event) {
            console.log(j)
          });
        var p = {
            init: function() {
                this.move();
                this.setCss();
                l = setInterval(p.tabChange, b.timeout);
                p.addEvent(b.mouseEvent);
                this.pause()
            },
            setCss: function() {
                switch (b.direction) {
                case 'left':
                    e.css('width', j * i + 'px');
                    break;
                case 'top':
                    e.css('height', i * k + 'px');
                    break
                }
            },
            move: function() {
                e.stop(true);
                g.removeClass(b.btnCurClassName).eq(n).addClass(b.btnCurClassName);
                if (b.direction == 'left') {
                    e.animate({
                        left: -j * m + 'px'
                    }, b.speed, function() {
                        if (!o) {
                            f.css({
                                position: 'static',
                                left: 0
                            });
                            e.css('left', 0);
                            m = 0;
                            o = true
                        }
                    })
                } else {
                    e.animate({
                        top: -k * m + 'px'
                    }, b.speed, function() {
                        if (!o) {
                            f.css({
                                position: 'static',
                                top: 0
                            });
                            e.css('top', 0);
                            m = 0;
                            o = true
                        }
                    })
                }
            },
            tabChange: function() {
                m++;
                n++;
                if (m == i) {
                    n = 0;
                    (b.direction == 'left') ? f.css({
                        position: 'relative',
                        left: i * j
                    }) : f.css({
                        position: 'relative',
                        top: i * k
                    });
                    o = false
                }
                ;p.move()
            },
            addEvent: function(q) {
                switch (q) {
                case 'click':
                    g.click(function() {
                        if (m == a(this).index()) {
                            return
                        }
                        ;m = n = a(this).index();
                        clearInterval(l);
                        p.move();
                        l = setInterval(p.tabChange, b.timeout)
                    });
                    break;
                case 'hover':
                    g.hover(function() {
                        m = n = a(this).index();
                        clearInterval(l);
                        p.move()
                    }, function() {
                        l = setInterval(p.tabChange, b.timeout)
                    });
                    break
                }
            },
            pause: function() {
                e.hover(function() {
                    clearInterval(l)
                }, function() {
                    l = setInterval(p.tabChange, b.timeout)
                })
            }
        };
        p.init()
    }
})(jQuery);
