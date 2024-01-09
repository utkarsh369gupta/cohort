pwd - print working directory

cd - change directory
cd .. :to come out of the folder
cd ../.. :come back two folders back
cd / :back to root folder
cd ~ :back to home directory

ls - list file
ls -l : returns list of files with more details
ls -R : to get more details
ls -t: returns last modified 
ls -a: if you want to list the hidden files.
ls .. : to get list of folders where the current folder is present.

mkdir - make directory/ creates folder
mkdir <folder name>
mkdir <folder name> && cd <folder name>: if you want to merge two command at the same time.

touch - to create a file in any folder
touch <file name>

cat - print contents of the file
cat <file name> or cat <relative paths: / /file name>
cat > <file name>: if you want to change whole content
cat >> <file name>: if you wnat to made some changes.

vi - use to edit file from terminal
if you want to save your changes then type :w
if you want to exit vi then press esc:q!

cp - copy file
cp <file name> <folder name>
if you want to copy folder then you need to write -r
cp -r <folder name> <place where you want to copy>

rm <file name>: if you want to delete a file
rm -r <folder name>: if you want to delete a folder

grep : used to get perticular type of files
ls -lR | grep .json

chmode - change file permissions
chmod  u+r <file name> 
       ugo+-rwx
for folder add -r for recusiveness

head <file name>: if you want to get first 10 line of data
head -20 <file name>: if you want 20 elements
tail <file name>: if you want to get last 10 lines of data
tail -n +25 <file name> | head -n +5 : this will give you then data from line 25 to line 30

wc - word count [no. of {lines word char}]
wc <file name>

grep "u" <file name> | wc 
grep "u" <file name> | wc -l
grep -c <file name>: to get the count of lines
grep -c "1" <file name>: gives the number of counts of the particular string in the file.
grep -h "one" <file name>: gives all the lines containing the string one.
grep -hi "one" <file name>: gives all the lines containing the string one without considering the lower or upper case.
grep -hin "one" <file name>: gives all the lines with line number containing the string one without considering the lower or upper case.


history: to get all the past command you entered. 

if you have .sh file the in first line type -> #!/bin/bash
then put some commands in it
after running {bash <file name>} it will run all the commands written in the file.sh 

echo "hello_boss": if you want to anything in bash
echo $PATH: to get all the paths

if you want to run .js code then type : node <filename>

npm - node pachage manager
npm install


