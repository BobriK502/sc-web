/(.*)(SCWeb\.(core|ui)\.(\w*))(.*)/ &&
!/(.*)(SCWeb\.(core|ui)\.(\w*))(.*=.*)/{
        match($0, /(.*)(SCWeb\.(core|ui)\.(\w*))(.*)/, arr)
        print arr[1] arr[4] arr[5]
}

/(.*)(SCWeb\.(core|ui)\.(\w*))(.*=.*)/ &&
!/(.*)(SCWeb\.(core|ui)\.(\w*))(.*prototype.*)/ { 
        match($0,/(.*)(SCWeb\.(core|ui)\.(\w*))(.*=.*)/, arr)
        print "const "arr[4] arr[5]
}

! /(.*)(SCWeb\.(core|ui)\.(\w*))(.*)/ {
        print $0
}

/(.*)(SCWeb\.(core|ui)\.(\w*))(.*prototype.*)/ {
        match($0, /.*SCWeb\.(core|ui)\.(\w*)(.*prototype.*)/, arr)
        print arr[2] arr[3]
}