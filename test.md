# Flask ETL Cross Commerce Challenge

The challenge consists in Extract, Transform and Load data from a API.

### Extract 

Extract all the numbers from the API, like this:


```sh
GET http://challenge.dienekes.com.br/api/numbers?page=1 
```
- Once It's in the end a empty object numbers is found:

```json
 { "numbers":[] }
```


### Transform

After extracting all the numbers, make a sorting algorithm 
without any built-in function for the sorting.


### Load

Make a _(REST/SOAP/GRAPHQL and so on)_ API must have the resource 
containing the numbers sorted. You can choose the
programming language, modeling, frameworks.


## Instructions

### Requirements 

Python 3.8+

PIP 20.2.3+

- Create a virtual environment

    ```sh
      python -m venv venv
    ```

  Use the virtual environment:

  linux:
    ```sh
      source venv/bin/activate
      (venv) $ _
    ```
  
  Windows:
    ```sh
      venv\Scripts\activate
      (venv) $ _
    ```

- Using the virtual environment of the project:

    ```sh
    pip install -r requirements.txt
    ## Execute in the root of the project
    ```


And it's ready to use

### Usage

- On the root of the project, run:

    ```
    python main.py
    ```

    or 

    ```sh
    python .\main.py
    ```

- Execute **unit test**:

  First go to the main function and pass test=True as a parameter
    ```sh
      #inside main.py:
      def main(test=False):
      if not test:
      extract()
      transform()
      server.run()


      main(test=True)
    ```
    After that, just run:
    ```sh
      python main.py
    ```
  
    On other terminal go to tests folder and execute:
    ```sh
    pytest
    ```
    
    The API needs to be running so the test run correctly

Note: Consider using python3 if anything worked

### API Routes


HTTP Method | Resource URL | Notes
---|---|---
**GET**  | /api/numbers  | returns a object containing 100 float numbers in order.
**GET**  | /api/numbers?page=_pageNumber_  | returns a object containing 100 sorted float numbers from a **page number**.
**GET**  | /api/numbers?page_size=_pageSize_ | returns a object containing the number of **page size** sorted float numbers from the first page.
**GET**  | /api/numbers?page_size=_pageSize_&page=_pageNumber_ | returns a object containing the number of **page size** float numbers sorted from the **page number** page.


### [This API Documentation](https://documenter.getpostman.com/view/14714590/UVREm5Lj)

#### Numbers JSON example

---
    [
      6.649677943594556e-7,
      0.0000019774114394001396,
      0.000004636210512744959,
      0.000004756668727175922,
      0.000007002330748129282,
      0.000007065404028741562,
      0.000007086987855196847,
      ........
    ]
---


#### Numbers Page JSON example

---
 
    {
        "numbers": [
            0.9997870921922876,
            0.9997871336004506,
            0.9997873118249204,
            0.9997874108125365,
            0.9997891602422454,
            0.9997896372427089,
            ........
        ]
    }
---




#### Numbers with page_size greater than 5000 JSON example

---
    {
        "error": "The page size should be less than 5000."
    }
---


#### Numbers with page_size less than 100 JSON example

---
    {
        "error": "The page size should be at least 100."
    }
---

