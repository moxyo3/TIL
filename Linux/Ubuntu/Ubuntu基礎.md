# Ubuntuのインストール
## 環境
- Windows10 Home
- Oracle VN VirtualBox
- Ubuntu18.04.3

## 日本語環境のUbuntuをダウンロード
https://www.ubuntulinux.jp/japanese
Ubuntu 18.04.3のISOイメージを選択

## Oracle VM VirtualBoxにUbuntuをインストール
- 新規メニューから
- 仮想マシンの名前をつける
- メモリーサイズ：必要メモリーサイズは2048MBだが重いので4096MBに設定
- 仮想ハードディスクを作成するを選択、作成

## aptができない不具合
参考：[[Ubuntu][apt] /var/lib/apt/lists/lockが不正な状態になった場合の対応メモ](https://qiita.com/koara-local/items/e63b7e4ff3cea803bdea)

    $ sudo rm /var/lib/apt/lists/lock
    $ sudo rm /var/lib/dpkg/lock
