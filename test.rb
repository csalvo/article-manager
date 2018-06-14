require 'selenium-webdriver'

options = Selenium::WebDriver::Chrome::Options.new(args: ['headless'])

driver = Selenium::WebDriver.for(:chrome, options: options)
driver.get('https://www.ups.com')

puts driver.title

driver.manage.all_cookies.each do |cookie|
    puts cookie[:name]
end

# element = driver.find_element(name: 'username')

# element.send_keys('test')

# element2 = driver.find_element(name: 'password')

# element2.send_keys('test')

# loginbtn = driver.find_element(name: 'login').click

# driver.manage.all_cookies.each do |cookie|
#     puts cookie[:name]
# end

# puts driver.title

driver.quit
