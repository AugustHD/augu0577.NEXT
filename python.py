import csv
import json
import yaml
import xml.etree.ElementTree as ET

def parse_txt(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        # Your parsing logic for TXT file goes here
        print(content)

def parse_csv(file_path):
    with open(file_path, 'r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            # Your parsing logic for CSV file goes here
            print(row)

def parse_yaml(file_path):
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)
        # Your parsing logic for YAML file goes here
        print(data)

def parse_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    # Your parsing logic for XML file goes here
    for element in root:
        print(element.tag, element.text)

def parse_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
        # Your parsing logic for JSON file goes here
        print(data)

# Usage
parse_txt('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\TeeExTee.txt')
parse_csv('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\SeeEsVee.csv')
parse_yaml('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\YamEl.yaml')
parse_xml('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\ExEmEl.xml')
parse_json('C:\\Users\\augu0577.NEXT\\Desktop\\bonaza\\scripts\\JaySon.json')