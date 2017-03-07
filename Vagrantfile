Vagrant.configure("2") do |config|
  # box
  config.vm.box = "ubuntu/xenial64"

  # networking
  config.vm.network "private_network", ip: "192.168.50.200"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.hostname = "webdevbootcamp.dev"
  config.hostsupdater.remove_on_suspend = true

  # sharing
  config.vm.synced_folder ".", "/app"
end
